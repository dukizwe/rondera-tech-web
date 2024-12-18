import { decodeId } from "@/helpers/IdEncryption";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const baseUrl = true ? "https://rondera-test.onrender.com" : "http://192.168.217.153:3000"
type Params = {
   params: Promise<{
      opportunityId: string,
      slug: string
   }>
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
   const encodedOpportunityId = (await params).opportunityId
   const opportunityId = decodeId(encodedOpportunityId)
   const opportunityRes = await fetch(`${baseUrl}/opportunities/${opportunityId}`)
   const opportunity = (await opportunityRes.json()).data
   if (!opportunity) {
      return {
         title: "Opportunity not found",
      }
   }
   const postPhotourl = opportunity.photo || opportunity.linkMetadata?.image
   return {
      title: opportunity.title,
      description: opportunity.description,
      openGraph: {
         images: postPhotourl ? [{ url: postPhotourl }] : [],
         siteName: "Rondera",
         locale: "fr_FR",
         type: "article",
         publishedTime: opportunity.createdAt,
         title: opportunity.title,
         description: opportunity.description,
      }
   }
}

export default async function OpportunityDetailsPage({ params }: Params) {
   const encodedOpportunityId = (await params).opportunityId
   const opportunityId = decodeId(encodedOpportunityId)
   const opportunityRes = await fetch(`${baseUrl}/opportunities/${opportunityId}`)
   const opportunity = (await opportunityRes.json()).data
   if (!opportunity) {
      return notFound()
   }
   return null
}

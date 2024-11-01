import { decodeId } from "@/helpers/IdEncryption";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import subText from "@/helpers/subText";

const baseUrl = false ? "" : "http://192.168.217.153:3000"
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
   if(!opportunity) {
      return {
         title: "Opportunity not found",
      }
   }
   const postPhotourl = opportunity.photo || opportunity.linkMetadata.image
   return {
     title: opportunity.title,
     description: subText(opportunity.description, 200),
     openGraph: {
      images: postPhotourl ? [{ url: postPhotourl }] : [],
      siteName: "Rondera",
      locale: "fr_FR",
      type: "article",
      publishedTime: opportunity.createdAt,
      title: opportunity.title,
      description: subText(opportunity.description, 200),
     }
   }
 }

export default async function OpportunityDetailsPage({ params }: Params) {
   const encodedOpportunityId = (await params).opportunityId
   const opportunityId = decodeId(encodedOpportunityId)
   const opportunityRes = await fetch(`${baseUrl}/opportunities/${opportunityId}`)
   const opportunity = await opportunityRes.json()
   if(!opportunity.data) {
      return notFound()
   }
   return null
}

import { decodeId } from "@/helpers/IdEncryption";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

const baseUrl = false ? "https://rondera-test.onrender.com" : "http://192.168.222.153:3000"
type Params = {
   params: Promise<{
      discussionId: string,
      slug: string
   }>
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
   const encodedOpportunityId = (await params).discussionId
   const opportunityId = decodeId(encodedOpportunityId)
   const opportunityRes = await fetch(`${baseUrl}/discussions/${opportunityId}`)
   const opportunity = (await opportunityRes.json()).data
   if (!opportunity) {
      return {
         title: "Discussion not found",
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

export default async function DiscussionDetailsPage({ params }: Params) {
   const encodedDiscussionId = (await params).discussionId
   const discussionId = decodeId(encodedDiscussionId)
   const opportunityRes = await fetch(`${baseUrl}/discussions/${discussionId}`)
   const opportunity = (await opportunityRes.json()).data
   if (!opportunity) {
      return notFound()
   }
   redirect("https://play.google.com/store/apps/details?id=com.dukizwe.betteur")
   return null
}

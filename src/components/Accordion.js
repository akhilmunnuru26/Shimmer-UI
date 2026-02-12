import AccordionItem from "./AccordionItem"

const accordionData = {                 //accordionData?.sections[0]?.items?.[0].title
  "pageTitle": "Help Center",
  "sections": [
    {
      "sectionId": "billing-docs",
      "sectionTitle": "Billing & Payments",
      "items": [
        {
          "id": "item-101",
          "title": "Which payment methods do you accept?",
          "body": "We accept Visa, Mastercard, American Express, and PayPal."
        },
        {
          "id": "item-102",
          "title": "Can I get a refund?",
          "body": "Refunds are processed within 5-7 business days depending on your bank."
        }
      ]
    },
    {
      "sectionId": "tech-support",
      "sectionTitle": "Technical Support",
      "items": [
        {
          "id": "item-201",
          "title": "How do I clear my cache?",
          "body": "Go to your browser settings, select 'Privacy and Security', and click 'Clear Browsing Data'."
        },
        {
          "id": "item-202",
          "title": "Is there a mobile app?",
          "body": "Yes, our app is available on both the iOS App Store and Google Play Store."
        }
      ]
    }
  ]
}

const Accordion = () => {
  return (
    <div>
      {accordionData?.sections?.map((eachItem) => <AccordionItem key={eachItem?.sectionId} title={eachItem?.sectionTitle} body={eachItem?.items}/>)}  
    </div>
  )
}

export default Accordion
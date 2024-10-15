import React from 'react'
import {
 Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const page = () => {
  return (
    <div>
     <main className="justify-center items-center p-8">
     <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it a working calculator?</AccordionTrigger>
    <AccordionContent>
      Yes. It works. 
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Alert>

  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>

     </main>
    </div>
  )
}

export default page

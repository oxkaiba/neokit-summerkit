import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from './ui/button'
import Link from 'next/link'

export default function SummerAccordion() {
  return (
    <div className='px-4'>
      <Accordion className="w-full space-y-3" type="single" collapsible defaultValue="item-1">
        <AccordionItem className="w-[335px] md:w-[516px] max-w-full" value="item-1">
          <AccordionTrigger>Get started with SummerKit 🟡</AccordionTrigger>
          <AccordionContent className='text-xs space-y-0.5'>
            Now that you have correctly forked the boilerplate, it's time to add your contracts and functions to it. Visit
            <Link href="https://wagmi.sh" target='_blank' className='ml-1 underline hover:opacity-70'>
              Wagmi
            </Link> to learn about the infinite possibilities you have and how to write it.
            <Link href="https://wagmi.sh/react/api/hooks" target='_blank' className='ml-1 underline hover:opacity-70'>
              <span className='underline text-main dark:text-white'>Check the hooks here.</span>
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="w-[335px] md:w-[516px] max-w-full" value="item-3">
          <AccordionTrigger>Additional Resources</AccordionTrigger>
          <AccordionContent className='text-xs space-y-0.5'>
            To further enhance your development experience with SummerKit, here are some additional resources:
            <ul className='list-disc list-inside mt-2 space-y-1'>
              <li>
                <Link href="https://dynamic.xyz" target='_blank' className='underline hover:opacity-70'>
                  Dynamic
                </Link> - Explore dynamic features and capabilities.
              </li>
              <li>
                <Link href="https://wagmi.sh" target='_blank' className='underline hover:opacity-70'>
                  Wagmi
                </Link> - Reactivity for Ethereum apps.
              </li>
              <li>
                <Link href="https://nextjs.org" target='_blank' className='underline hover:opacity-70'>
                  Next.js
                </Link> - Learn about the Next.js framework for building web applications.
              </li>
              <li>
                <Link href="https://ui.shadcn.com" target='_blank' className='underline hover:opacity-70'>
                  Shadcn
                </Link> - Explore Shadcn for building stunning UI components.
              </li>
              <li>
                <Link href="https://tailwindcss.com" target='_blank' className='underline hover:opacity-70'>
                  Tailwind CSS
                </Link> - Get started with Tailwind CSS for styling your applications.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="w-[335px] md:w-[516px] max-w-full" value="item-2">
          <AccordionTrigger>What's coming next?</AccordionTrigger>
          <AccordionContent className='text-xs'>
            In the next few days, Wagmi styled components like Swap, Stake, Balances examples will be added, as well as other UI/UX resources.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

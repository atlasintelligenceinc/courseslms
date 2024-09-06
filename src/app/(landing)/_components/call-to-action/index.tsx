import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { BadgePlus } from "@/icons"
import Link from "next/link"

type Props = {}

const CallToAction = (props: Props) => {
  return (
    <div className="flex flex-col items-start md:items-center gap-y-5 md:gap-y-0">
      <GradientText
        className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold"
        element="H1"
      >
        LMS Testing <br className="md:hidden" /> SFH
      </GradientText>
      <p className="text-sm md:text-center text-left text-muted-foreground">
        Ut nisi nisi aliqua mollit commodo laborum culpa
        <br className="md:hidden" />
        proident esse fugiat, <br className="hidden md:block" /> nostrud,
        exercitation, pariatur duis labore
        <br className="md:hidden" />
        aliquip.
      </p>
      <div className="flex md:flex-row flex-col md:justify-center gap-5 md:mt-5 w-full">
        <Button
          variant="outline"
          className="rounded-xl bg-transparent text-base"
        >
          Watch Demo
        </Button>
        <Link href="/sign-in">
          <Button className="rounded-xl text-base flex gap-2 w-full">
            <BadgePlus /> Get Started
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default CallToAction

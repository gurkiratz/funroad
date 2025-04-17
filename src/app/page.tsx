import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 p-8">
      <div>
        <Button variant="elevated">I am a button</Button>
      </div>
      <div>
        <Input placeholder="I am an input" />
      </div>
      <div>
        <Progress value={50} className="w-[400px]" />
      </div>
      <div>
        <Textarea placeholder="I am textarea" />
      </div>
    </div>
  )
}

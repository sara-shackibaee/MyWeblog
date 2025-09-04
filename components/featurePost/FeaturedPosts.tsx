import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
export default function FeaturedPosts() {
  return (
    <div className="flex flex-col gap-10 ">
      <h1 className="text-center mt-4 text-white">Featured Posts</h1>

      <div className="grid grid-cols-4 mb-30 p-10">
        <Card className="  p-2 rounded text-center">
          <CardHeader className=" p-2">
            <CardTitle>NextJs</CardTitle>
            <CardDescription>Getting Started with NextJs</CardDescription>
            <CardAction>Octobr 16,2025</CardAction>
          </CardHeader>
          <CardContent className="bg-blue-300 p-10 text-justify">
            <p>
              Nextjs is a the Reactframework for production - it makes building
              fullstack React apps sites a breeze andships with built-in SSR.
            </p>
          </CardContent>
          <CardFooter className="p-2 text-center">
            <p className="text-center bg-blue-500 text-white p-2 rounded text-center">
              <Link href="/posts"> Go start</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

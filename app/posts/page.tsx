import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CardItems } from '../../lib/data';
import Link from 'next/link';

export default function Posts() {
  return (
    <div className="bg-neutral-700 p-4">
      <h1 className="p-4 text-white font-bold">Posts:</h1>
      <div className="h-screen bg-neutral-700 p-4 flex justify-center items-start gap-4 ">
        {CardItems.map((item: any) => (
          <Card key={item.id} className=" p-2 rounded text-center w-64 flex-1">
            <CardHeader className=" p-2">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardAction>{item.action}</CardAction>
            </CardHeader>
            <CardContent className="bg-blue-300  p-4">
              <p>{item.content}</p>
            </CardContent>
            <Link className="text-center" href={`/posts/${item.id}`}>
              <CardFooter className="bg-blue-500  p-2 text-center cursor-pointer">
                <p className="text-center ">{item.footer}</p>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

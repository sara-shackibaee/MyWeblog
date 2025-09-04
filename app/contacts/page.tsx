'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import * as z from 'zod';
import { Textarea } from '@/components/ui/textarea';
const formSchema = z.object({
  email: z.string(),
  password: z.string(),
  phone: z.string(),
  description: z.string(),
});
export default function Contacts() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      phone: '',
      description: '',
    },
  });
  const handleSubmit = () => {};
  return (
    <div className="flex items-center justify-center h-screen bg-neutral-700 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center font-bold">
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Tell us your thoughts.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="shackibaees@gmail.com" {...field} />
                    </FormControl>
                    <FormDescription>Please enter your email.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="phone" {...field} />
                    </FormControl>
                    <FormDescription>Please enter your phone.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="description" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter your description.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Send</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

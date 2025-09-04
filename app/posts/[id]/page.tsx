import { CardItems } from '../../../lib/data';
export default async function DetailOfPostItems({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const selectedItem: any = CardItems.find((item: any) => item.id == id);

  return (
    <div className="p-20 bg-pink-100 h-screen ">
      <h1 className="text-pink-500 mb-10">{selectedItem.title}:</h1>
      <div className="text-justify">{selectedItem.detail}</div>
    </div>
  );
}

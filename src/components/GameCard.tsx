export default function GameCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="w-[150px] flex-shrink-0 text-center space-y-2">
      <img
        src={image}
        alt={title}
        className="w-full h-[150px] object-cover rounded-lg shadow-md"
      />
      <div className="font-semibold">{title}</div>
    </div>
  );
}

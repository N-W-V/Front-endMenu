interface SliderItemProps {
  Foto: string;
}

export default function SliderItem({ Foto }: SliderItemProps) {
  return (
    <img
      className="w-full aspect-[15/8] object-cover rounded-3xl"
      src={Foto}
      alt=""
    />
  );
}
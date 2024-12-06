import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        className="pt-6 pb-6 mx-auto"
        src="/temp.logo.png"
        alt="Corbie Coding Logo"
        width={500}
        height={500}
      />

    </div>
  );
}

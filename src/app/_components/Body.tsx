"use client";

import Image from "next/image";

export default function Body() {
  const description1 = `Луис кееполи Монголиа ХХК нь БНХАУ-ын ӨМӨЗО-ы Бугат хотын Өвөрмонголын Луис кееполи туршилт, технологи ХХК-ий хөрөнгө оруулалтаар “Монгол Улсад нүүрсний сорилт, шинжилгээний лаборатори болон техник хяналтын нэгж байгуулах төсөл-ийг хэрэгжүүлэх зориулалтаар 2024 оны 5-р сард байгуулагдсан.
  Энэхүү төслийн хүрээнд тус компани нь 2024 оны 6-р сараас эхлэн Улаанбаатар хотын Хан-Уул дүүргийн 22-р хороо, Ар зайсан гудамжны 92 тоотод байрлах иргэн Д.Уранчимэгийн 510м2 талбай бүхий 3 давхар барилгад Монгол Улсын хобогдох хууль, дүрэм, журмын хүрээнд олон улсын стандартад нийцсэн жишиг лабораторийг байгуулсан.`;
  const description2 =
    "Тус компаний сорилтын лаборатори БНХАУ-ын ӨМӨЗО-ы Бугат хотын “Өвөрмонголын Луис кееполи туршилт, технологи” ХХК-ий 670,000 ам.долларийн хөрөнгө оруулалтаар Хятад Улсын Хятад Улсын “WILLSUI”, “SI-TIAN”, “WEPER” фирмийн 35 нэр төрлийн орчин үеийн дэвшилтэт тоног төхөөрөмжөөр тоноглогдсон. Өдөрт чулуун, хүрэн, коксжсон нүүрсний 50-60 дээжинд Монгол Улсын болон Хятад Улсын стандарт, арга аргачилалын дагуу хийж гүйцэтгэх чадвартай юм";
  const description3 =
    "Техникийн хяналтын ажилтнууд нь СХЗГазар болон Монгол Улсын Шинжлэх ухаан, технологийн их сургуулиас 2019-2025 онуудад зохион байгуулагдсан сургалтуудад хамрагдаж мэргэшсэн бөгөөд 2024 оны 1-р сараас Дорноговь аймгийн нутагт үйл ажиллагаагаа явуулдаг “Айл баян”ХХК, “Түмэн айл” ХХК-ий уурхайн нүүрсний овоолгын талбайд дээж авах, ачилтын хяналт хийх ажлыг гүйцэтгэж байна.";

  return (
    <div className="flex flex-col md:flex-nowrap gap-8">
      {/* Left Column */}
      <div className="w-full flex md:w-full">
        <section className="text-black min-h-[300px]">
          <div className="container mx-auto px-4 py-8 text-center">
            <div className="w-32 h-32 flex justify-center rounded-full overflow-hidden">
              <Image
                src="/zurg 2.jpg"
                alt="A"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />{" "}
              <Image
                src="/zurg 2.jpg"
                alt="SB"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />{" "}
              <Image
                src="/zurg 2.jpg"
                alt="C"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />{" "}
              <Image
                src="/zurg 2.jpg"
                alt="D"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Танилцуулга</h1>
            {description1}
          </div>
        </section>
        <section className="text-black  min-h-[300px]">
          <div className="container mx-auto px-4 py-8 text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/zurg
                3.jpg"
                alt="Sample System"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Тоног төхөөрөмж
            </h1>
            {description3}
          </div>
        </section>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 m-auto space-y-20 ">
        <section className="text-black  min-h-[300px]">
          <div className="container mx-auto px-4 py-8 text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <Image
                src="/zurg 2.jpg"
                alt="Sample System"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">3dh heseg</h1>
            {description2}
          </div>
        </section>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Pencil } from "lucide-react";

function EditableDescription({ initialText }: { initialText: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  return (
    <div className="relative">
      {isEditing ? (
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded-lg text-black"
          />
          <button
            onClick={() => setIsEditing(false)}
            className="absolute right-0 -top-8 text-green-600"
          >
            <Check size={20} />
          </button>
        </div>
      ) : (
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {text}
          <button
            onClick={() => setIsEditing(true)}
            className="ml-2 text-gray-400 hover:text-black"
          >
            <Pencil size={16} />
          </button>
        </p>
      )}
    </div>
  );
}

export default function Body() {
  const description =
    "Errors in sampling have a greater impact on an analytical result than sample preparation and analysis combined. Our comprehensive sampling system services ensure accurate and reliable results for your industrial operations.";

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-8">
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-20">
        <section className="text-black min-h-[300px]">
          <div className="container mx-auto px-4 py-8 text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/globe.svg"
                alt="Sample System"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Sampling & sampling system services
            </h1>
            <EditableDescription initialText={description} />
          </div>
        </section>

        <section className="text-black lg:mt-[40%] min-h-[300px]">
          <div className="container mx-auto px-4 py-8 text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/globe.svg"
                alt="Sample System"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Sampling & sampling system services
            </h1>
            <EditableDescription initialText={description} />
          </div>
        </section>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 space-y-20">
        <section className="text-black lg:mt-[40%] min-h-[300px]">
          <div className="container mx-auto px-4 py-8 text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/globe.svg"
                alt="Sample System"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Sampling & sampling system services
            </h1>
            <EditableDescription initialText={description} />
          </div>
        </section>

        <section className="text-black lg:mt-[40%] min-h-[300px]">
          <div className="container mx-auto px-4 py-8 text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/globe.svg"
                alt="Sample System"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Sampling & sampling system services
            </h1>
            <EditableDescription initialText={description} />
          </div>
        </section>
      </div>
    </div>
  );
}

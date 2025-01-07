import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <main className="max-w-[300px] w-full space-y-6 px-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700 flex flex-col items-center mt-3">
        <div id="app-title">
          <h1 className="text-2xl leading-6 text-gray-700 dark:text-gray-200 text-center">
            htmx Book App
          </h1>
        </div>
        <div>
          <ul>
            {Array.from({ length: 17 }, (_, index) => {
              const sectionNumber = index + 3;
              return (
                <div key={sectionNumber} className="flex flex-col items-center">
                  <Link
                    key={sectionNumber}
                    href={`/section${sectionNumber}`}
                    className="text-lg text-center hover:text-amber-500"
                  >
                    Section {sectionNumber}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

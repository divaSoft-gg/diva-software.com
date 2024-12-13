import { Link } from "@nextui-org/react";
import { formatDate } from "../../common/utils";
import CenteredLayout from "../../components/ui/centredLayout";
import { useGetArticles } from "../../services/blog-service";
import { FaArrowRight } from "react-icons/fa"; // Import an example icon, you can change this to any icon you prefer
import { DataItem } from "../../common/types";

export default function Blog() {
  console.log(import.meta.env.CMS_URL);
  const { isSuccess, data } = useGetArticles();
  return (
    <section id="blog" className="py-32">
      <CenteredLayout>
        {isSuccess && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {data.map((element: DataItem, index: number) => (
              <div key={index} className="flex flex-col gap-4 bg-cover">
                {/* Image container with hover effect */}
                <div
                  className="relative bg-cover group w-78 h-60"
                  style={{
                    backgroundImage: `url(${import.meta.env.VITE_CMS_URL}/${
                      element.cover.url
                    })`,
                  }}
                >
                  {/* Icon that will appear when hovering */}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 cursor-pointer group-hover:opacity-100 group-hover:backdrop-blur-sm">
                    <Link href={`/blog/${element.documentId}`}>
                      <FaArrowRight className="text-4xl text-white" />
                    </Link>
                  </div>
                </div>

                {/* Date and content */}
                <p className="text-sm text-gray-500">
                  {formatDate(element.publishedAt)}
                </p>
                <div className="flex flex-col justify-center gap-3">
                  <h1 className="text-2xl">{element.title}</h1>
                  <p className="text-lg">{element.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CenteredLayout>
    </section>
  );
}

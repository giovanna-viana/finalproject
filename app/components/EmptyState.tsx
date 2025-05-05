"use client";

import { useRouter } from "next/navigation";
import Heading from "@/app/components/Heading";
import Button from "@/app/components/button";

interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}
const EmptyState: React.FC<EmptyState> = ({
  title = "Ops! Nada encontrado",
  subtitle = "Tente mudar ou remover alguns filtros para ver mais opções",
  showReset
}) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} center />

      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remover os filtros"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;

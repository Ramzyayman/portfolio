import { ArrowLeft, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center justify-center text-center">
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 p-8 sm:p-12 max-w-md w-full space-y-6">
        <div className="w-12 h-12 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center mx-auto text-neutral-700 dark:text-neutral-300">
          <Terminal className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
            Error 404 // Route Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
            Resource Missing
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The project or path you requested does not exist or has been moved.
          </p>
        </div>

        <div className="pt-2">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}

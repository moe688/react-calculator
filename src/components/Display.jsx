import { Separator } from "@/components/ui/separator";

const Display = ({ input, result }) => {
	return (
		<div className="rounded-lg border bg-muted p-4 grid gap-2 ">
			<h1 className="rounded-lg border bg-muted flex justify-end-safe items-center h-25  min-w-full max-w-sm text-5xl [scrollbar-thin] overflow-x-auto whitespace-nowrap">
				{input}
			</h1>
			<Separator />
			<output className="rounded-lg border bg-muted flex justify-end-safe items-center min-h-15  min-w-full max-w-sm [scrollbar-thin] text-2xl text-gray-500 overflow-x-auto ">
				{result}
			</output>
		</div>
	);
};

export default Display;

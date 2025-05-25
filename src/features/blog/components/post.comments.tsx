import FormInput from "@/shared/components/form/form-input";
import { CommentFormType, commentSchema } from "../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function PostComments() {
    const form = useForm<CommentFormType>({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            name: "",
            email: "",
            comment: "",
        }
    });
    const onSubmit = (data: CommentFormType) => {
        console.log(data);
    }
    return <div className="px-2">
        <h3 className="text-2xl text-hijau-tua font-bold hover:underline tracking-wide mb-4">What Do You Want Us to Write About?</h3>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <FormInput
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="!rounded !border-none !px-8 !py-4"
                    register={form.register}
                    name="name"
                />
                <FormInput
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className="!rounded !border-none !px-8 !py-4"
                    register={form.register}
                    name="email"
                />
            </div>
            <textarea
                rows={8}
                id="comment"
                placeholder="Write a Message"
                className="bg-neutral-white w-full rounded border-none px-8 py-4 font-(family-name:--font-dm-sans)"
                {...form.register("comment")}
                name="comment"
            />
            {
                form.formState.errors.comment && (
                    <p className="text-red-500 text-sm">{form.formState.errors.comment.message}</p>
                )
            }
            <button type="submit" className="mt-8 w-full sm:w-auto bg-primary-ungu hover:underline transition text-neutral-white font-(family-name:--font-dm-sans) font-bold px-8 py-4 rounded-2xl">Leave a Review</button>
        </form>
    </div>
}
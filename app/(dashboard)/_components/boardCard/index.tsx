"use client";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./overlay";
import { formatDistance, formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import Footer from "./Footer";
import { Skeleton } from "@/components/ui/skeleton";

interface BoardCardProps {
    id: string;
    title: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    createdAt: number;
    orgId: string;
    isFavorite: boolean;
}

const BoardCard = ({
    id,
    title,
    authorId,
    authorName,
    createdAt,
    orgId,
    isFavorite,
    imageUrl,
}: BoardCardProps) => {
    const { userId } = useAuth();
    const authorLabel = userId == authorId ? "you" : authorName;
    const createdAtLabel = formatDistanceToNow(createdAt, {
        addSuffix: true,
    });

    return (
        <Link href={`/board/${id}`}>
            <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
                <div className="relative flex-1 bg-amber-50">
                    <Image
                        src={imageUrl}
                        fill
                        className="object-fit"
                        alt={title}
                    />
                    <Overlay />
                </div>
                <Footer
                    isFavorite={isFavorite}
                    title={title}
                    authorLabel={authorLabel}
                    createdAtLabel={createdAtLabel}
                    onClick={() => { }}
                    disabled={false}
                />
            </div>
        </Link>
    )
};

BoardCard.Skeleton = function BoardCardSkeleton() {
    return (
        <div className="aspect-[100/127] rounded-lg justify-between overflow-hidden">
            <Skeleton className="w-full h-full" />
        </div>
    )
}

export default BoardCard
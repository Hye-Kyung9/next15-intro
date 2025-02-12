function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error('Error loading');
  }
  const { productId, reviewId } = await params;
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}

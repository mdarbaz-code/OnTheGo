import Image from "../UI/components/Image";

const ImagePage = () => {
  return (
    <>
      <Image
        src="https://wallpapers.com/images/hd/cute-pfp-anime-girl-h42uwevdug8wnh4a.jpg"
        shape="circle"
        size="lg"
      />
      <Image
        src="https://tse3.mm.bing.net/th/id/OIP.U4BB9mJ5J59K583FaFE9XQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
        shape="rounded"
        size="xl"
      />
      <Image
        src="https://tse3.mm.bing.net/th/id/OIP.U4BB9mJ5J59K583FaFE9XQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
        shape="square"
        size="md"
      />
      <Image
        src="https://tse3.mm.bing.net/th/id/OIP.U4BB9mJ5J59K583FaFE9XQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3g"
        size="full"
        className="h-64"
      />
      <Image
        src="https://tse3.mm.bing.net/th/id/OIP.U4BB9mJ5J59K583FaFE9XQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
        fallback="/images/placeholder.png"
      />
    </>
  );
};

export default ImagePage;
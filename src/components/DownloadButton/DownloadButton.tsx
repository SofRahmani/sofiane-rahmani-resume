import { Button } from "@nextui-org/button";

export default function DownloadButton() {
  return (
    <a href={"./resume/Sofiane Rahmani - CV.pdf"} target='_blank' className=' fixed bottom-[50px] z-[300] right-20 ' >
      <Button radius='sm' variant='shadow' color='primary'>
        Télécharger mon CV
      </Button>
    </a>
  );
}
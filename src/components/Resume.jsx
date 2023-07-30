import Button from "../interface/Button";
// import { resumeLink } from "../constants";
import resume from '../assets/pdf/omarchertiCvActualise.pdf';
export default function Resume() {
  return (
    <a target="_blank" rel="noreferrer" download="resume" href={resume}>
      <Button size="md">
        DOWNLOAD RESUME <i className="fa-solid fa-file-arrow-down"></i>
      </Button>
    </a>
  );
}

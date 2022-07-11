import HeadingLogo from "./HeadingLogo";
import NavLinks from "./NavLinks";
import SpeakerSearch from "./SpeakerSearch";

function SpeakerHeading({ speakers }: SpeakersProps) {
  return (
    <header className='sticky top-0 z-50 pb-2'>
      <nav className='flex bg-black h-20 items-center justify-around py-1'>
        <div className='flex-none ml-1'>
          <div>
            <NavLinks />
          </div>
        </div>
        <div className='flex-1 my-auto'>
          <HeadingLogo />
        </div>
        <div className='flex text-right mr-5'>
          <SpeakerSearch speakers={speakers} />
        </div>
      </nav>
    </header>
  );
}

export default SpeakerHeading;
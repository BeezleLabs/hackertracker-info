import InfoSection from "./InfoSection";

function ConInfo({ conference }: InfoDisplayProps) {
  return (
    <div className='mt-5 mx-8'>
      {conference.description && (
        <InfoSection section='DEF CON 30' content={conference.description} />
      )}
      {conference.codeofconduct && (
        <InfoSection
          section='Code of Conduct'
          content={conference.codeofconduct}
        />
      )}
      {conference.supportdoc && (
        <InfoSection section='Support' content={conference.supportdoc} />
      )}
    </div>
  );
}

export default ConInfo;

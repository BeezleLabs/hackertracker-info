/* eslint-disable no-use-before-define */
interface EventProps {
  event: EventData;
  bookmarked: boolean;
}

interface EventDetailProps {
  event: HTEvent;
}

interface EventDetailHeaderProps {
  eventId: number;
}

interface ScheduleProps {
  events: EventData[];
  title: string;
}

interface EventHeadingProps {
  events: EventSearch[];
}

interface EventSearchProps {
  events: EventSearch[];
}

interface EventSearching {
  event: EventSearch;
  active: boolean;
}

interface EventSearch {
  id: number;
  title: string;
  color: string;
}

interface EventsProps {
  dateGroup: Map<string, EventData[]>;
  title: string;
}

interface EventData {
  id: number;
  begin: string;
  beginTimestampSeconds: number;
  title: string;
  location: string;
  color: string;
  category: string;
  speakers: string;
}

interface CategoriesProps {
  categories: CategoryData[];
}

interface CategoryData {
  name: string;
  data: HTEventType | undefined;
}

interface CategoryCellProps {
  category: HTEventType;
}

interface CategoryPageProps {
  category: string;
  events: EventData[];
}

interface SpeakersProps {
  speakers: Speaker[];
}

interface Speaker {
  name: string;
  id: number;
}

interface SpeakerListProps {
  speakerGroup: Map<string, Speaker[]>;
}

interface SpeakerSearching {
  speaker: Speaker;
  active: boolean;
}

interface SpeakerDetailProps {
  speaker: HTSpeaker;
}

interface InfoProps {
  conference: HTConference | null;
  faq: HTFAQ[];
}

interface MapProps {
  conference: HTConference | null;
}

interface ConInfoProps {
  conference: HTConference;
  faq: HTFAQ[];
}

interface InfoDisplayProps {
  conference: HTConference;
}

interface FaqProps {
  faq: HTFAQ[];
}

interface InfoSectionProps {
  section: string;
  content: string;
}

interface SplashProps {
  data: SplashInfo;
}

interface SplashInfo {
  counts: SplashCounts;
  kickoff: string;
}

interface SplashCounts {
  events: number;
  speakers: number;
}

interface StatsProps {
  counts: SplashCounts;
}

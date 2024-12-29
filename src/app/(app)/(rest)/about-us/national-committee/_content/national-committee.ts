import { StaticImageData } from "next/image";
import { ncOutreach, ncTreasurer, ncVp } from "../_assets";

export type CommitteeMember = {
  name: string;
  position: string;
  imageURL?: StaticImageData;
};

export const nationalCommittee: CommitteeMember[] = [
  {
    name: "Georgios Papaconstantinou",
    position: "President",
    imageURL: ncTreasurer,
  },
  {
    name: "Antreas Xydas",
    position: "PENDING",
    imageURL: ncVp,
  },
  {
    name: "Stella Piperidou",
    position: "PENDING",
    imageURL: ncOutreach,
  },
];

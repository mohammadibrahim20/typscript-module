{
  // union type
  /*  type FrontEntDeveloper = "fakibazDeveloper" | "JuniorDeveloper";
  type FullstackDeveloper = "frontendDeveloper" | "ExpertDeveloper";
  type Developer = FrontEntDeveloper | FullstackDeveloper;
  const newDeveloper: FrontEntDeveloper = "JuniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "A-";
  };

  const user1: User = {
    name: "John",
    gender: "male",
    bloodGroup: "O+",
  };

 */

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;
  const fullStackDevloper: FullstackDeveloper = {
    skills: ["html", "js", "css", "jsx"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}

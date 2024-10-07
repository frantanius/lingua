"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { Flag, Boxes, BookOpenCheck, Swords, Sword } from "lucide-react";

import ViewCourse from "./course/view";
import EditCourse from "./course/edit";
import CreateCourse from "./course/create";

import ViewUnit from "./unit/view";
import EditUnit from "./unit/edit";
import CreateUnit from "./unit/create";

import ViewLesson from "./lesson/view";
import EditLesson from "./lesson/edit";
import CreateLesson from "./lesson/create";

import ViewChallenge from "./challenge/view";
import EditChallenge from "./challenge/edit";
import CreateChallenge from "./challenge/create";

import ViewChallengeOption from "./challegeOption/view";
import EditChallengeOption from "./challegeOption/edit";
import CreateChallengeOption from "./challegeOption/create";

const dataProvider = simpleRestProvider("/api");

export default function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      title="Lingua Admin"
      defaultTheme="light"
    >
      <Resource
        name="courses"
        icon={Flag}
        list={ViewCourse}
        create={CreateCourse}
        edit={EditCourse}
        recordRepresentation="title"
      />
      <Resource
        name="units"
        icon={Boxes}
        list={ViewUnit}
        create={CreateUnit}
        edit={EditUnit}
        recordRepresentation="title"
      />

      <Resource
        name="lessons"
        icon={BookOpenCheck}
        list={ViewLesson}
        create={CreateLesson}
        edit={EditLesson}
        recordRepresentation="title"
      />

      <Resource
        name="challenges"
        icon={Swords}
        list={ViewChallenge}
        create={CreateChallenge}
        edit={EditChallenge}
        recordRepresentation="question"
      />

      <Resource
        name="challengeOptions"
        icon={Sword}
        list={ViewChallengeOption}
        create={CreateChallengeOption}
        edit={EditChallengeOption}
        recordRepresentation="text"
        options={{ label: "Challenge Options" }}
      />
    </Admin>
  );
}

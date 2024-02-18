import { SectionModel } from "./App.interface";

export const sections: SectionModel[] = [
    {
      name: "React Course", 
      sections: [
        {
          name: "Classes",
          sections: [
            {
              name: "ClassEvents"
            }
          ]
        },
        {
          name: "Functional Components"
        }
      ],
    },
    {
      name: "Other exercises", 
      sections: [
        {
          name: "Queue"
        },
        {
          name: "Sub1 Title", 
          sections: [
            {
              name: "TestExercise"
            }, 
            {
              name: "Subsub text 2"
            }
          ],
        }
      ],
    }
]
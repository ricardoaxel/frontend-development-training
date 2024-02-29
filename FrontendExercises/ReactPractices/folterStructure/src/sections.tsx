import { SectionModel } from "./App.interface";

export const sections: SectionModel[] = [
    {
      name: "React Course", 
      sections: [
        {
          name: "Classes",
          sections: [
            {
              name: "ClassEventsES6"
            },  
            {
              name: "ClassEventsES7"
            },
            {
              name: "LifeCycle"
            },
            {
              name: "AjaxApis"
            }
          ],
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
          name: "Sorting"
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
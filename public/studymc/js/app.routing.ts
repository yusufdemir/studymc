import { RouterModule, Routes } from '@angular/router';
import { CourseComponent }  from './course/course.component';
import { CoursesComponent }  from './courses/courses.component';
import { CourseTopicsComponent }  from './course/courseTopics.component';

import { TopicComponent } from './topic/topic.component';
import { TopicLearnComponent } from './topic/topicLearn.component';
import { TopicTestComponent } from './topic/topicTest.component';
import { TopicReviewComponent } from './topic/topicReview.component';

const app_routes: Routes = [
  { path: 'studymc/course', component: CourseComponent},
  { path: 'studymc/courses', component: CoursesComponent},
  { path: 'studymc/course/:id', component: CourseComponent,
      children: [
        { path: '', redirectTo: '/topics', pathMatch: 'full' },
        { path: 'topics', component: CourseTopicsComponent},
      ]
  },
  { path: 'studymc/topic/:id', component: TopicComponent,
      children: [
        { path: '', redirectTo: '/learn', pathMatch: 'full' },
        { path: 'learn', component: TopicLearnComponent},
        { path: 'test', component: TopicTestComponent},
        { path: 'review', component: TopicReviewComponent}
      ]
  },
  { path: '**', pathMatch:'full', redirectTo: 'studymc/courses' } //catch any unfound routes and redirect to home page
];

export const app_routing = RouterModule.forRoot(app_routes);
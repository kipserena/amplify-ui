import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

@Component({
  selector: 'sign-up-with-email-lambda',
  templateUrl: 'sign-up-with-email-lambda.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpWithEmailLambdaComponent {
  constructor() {
    Amplify.configure(awsExports);
  }
}

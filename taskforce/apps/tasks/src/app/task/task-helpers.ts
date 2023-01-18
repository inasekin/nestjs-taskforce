import { Status } from '@taskforce/shared-types';
import { TaskAction } from './task.constant';

export function adaptTaskStatusToAction(newStatus: Status): TaskAction {
  switch (newStatus) {
    case Status.Rejected:
      return TaskAction.SetRejected;
    case Status.InProgress:
      return TaskAction.SetInProgress;
    case Status.Failed:
      return TaskAction.SetFailed;
    case Status.Done:
      return TaskAction.SetDone;
  }
}

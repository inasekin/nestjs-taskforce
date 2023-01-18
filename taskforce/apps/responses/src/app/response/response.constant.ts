export const enum ResponseTextLength {
  Min = 50,
  Max = 500,
}

export const enum Evaluation {
  Min = 1,
  Max = 5,
}

export const ResponseApiError = {
  ResponseTextNotValid: `Response text is less ${ResponseTextLength.Min} or more than ${ResponseTextLength.Max} chars`,
  ExecutorIdNotValid: 'Task executor id isn\'t Mongo Id',
  ClientIdNotValid: 'Client id isn\'t Mongo Id',
  EvaluationNotValid: `Evaluation value il less ${Evaluation.Min} or more than ${Evaluation.Max}`,
} as const;

export const ResponseApiDescription = {
  Id: 'The uniq response id ',
  ResponseText: `Response text: min length is  ${ResponseTextLength.Min}, max is ${ResponseTextLength.Max} chars`,
  ExecutorId: 'Task executor id',
  ClientId: 'Client id',
  TaskId: 'Response\'s task Id',
  Evaluation: `Evaluation of the task execution, number from ${Evaluation.Min} to ${Evaluation.Max}`,
  EvaluationsSum: 'Total of executor\'s evaluations',
} as const;

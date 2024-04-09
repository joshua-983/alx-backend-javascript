export default function taskBlock(trueOrFalse) {
  let task = false; // Use let instead of var
  let task2 = true; // Use let instead of var

  if (trueOrFalse) {
    task = true; // Update the existing variable instead of redeclaring it
    task2 = false; // Update the existing variable instead of redeclaring it
  }

  return [task, task2];
}


import ActionSheet from '../native/action-sheet'

export function pickGender () {
  const OPTIONS = ['Mr', 'Mrs', 'Cancel']
  let params = {
    options: OPTIONS,
    title: 'Pick gender',
    message: 'Choose gender',
    cancelButtonIndex: 2
  }

  return new Promise((resolve, reject) => {
    ActionSheet.showActionSheetWithOptions(params, index => {
      if (index !== 2) return resolve(OPTIONS[index])
      return reject(new Error('Cancelled'))
    })
  })
}

export function pickHear () {
  const OPTIONS = ['Hear 1', 'Hear 2', 'Hear 3', 'Cancel']
  let params = {
    options: OPTIONS,
    title: 'Pick hear',
    message: 'Choose hear',
    cancelButtonIndex: 3
  }
  return new Promise((resolve, reject) => {
    ActionSheet.showActionSheetWithOptions(params, index => {
      if (index !== 3) return resolve(OPTIONS[index])
      return reject(new Error('Cancelled'))
    })
  })
}

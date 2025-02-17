import React from 'react'

function Alert(p) {
    const Capitalize = (word) => {
        let newword = word.toLowerCase()
        return newword.charAt(0).toUpperCase() + newword.slice(1)
      }
  return (
    <div className='h-[51px]'>
    {p.alert && <div class="p-4 mb-4 text-sm text-green-800 bg-green-300 dark:bg-gray-800 dark:text-green-500" role="alert">
        <strong>{Capitalize(p.alert.type)} : </strong>{p.alert.msg}
    </div>}
    </div>
  )
}

export default Alert

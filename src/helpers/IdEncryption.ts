import { Base64 } from 'js-base64';

export const encodeId = (id: string): string => {
   try {
      if (id.length < 10) {
         return `${Base64.encode(`${id}`, true)}_${Base64.encode(`${id}${[1, 2, 3, 4, 5].join(",")}`, true)}`
      }
      return Base64.encode(id, true)
   } catch (error) {
      console.log(error)
      return id
   }
}

export const decodeId = (encodedString: string) => {
   try {
      const splis = encodedString.split('_')
      const str = splis[0]
      if (str) {
         return Base64.decode(str)
      }
      return Base64.decode(encodedString)
   } catch (error) {
      console.log(error)
      return null
   }
}
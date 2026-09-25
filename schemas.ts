const prankTarget = {
  name: 'prankTarget',
  title: 'Gotcha Target Profile',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string', // משתנה מסוג טקסט שורה אחת
    },
    {
      name: 'ageAndBirth',
      title: 'Age & Birthday',
      type: 'string',
    },
    {
      name: 'currentSituation',
      title: 'Current Live Situation',
      type: 'string', // המשתמש יקליד מה החבר עושה ברגע זה
    },
    {
      name: 'snifInfo',
      title: 'Social Circle / Inside Info',
      type: 'text', // תיבת טקסט גדולה לסיפורים וסודות
    },
    {
      name: 'futurePlans',
      title: 'Future Aspirations',
      type: 'string',
    },
    {
      name: 'embarrassingImage1',
      title: 'First Throwback Photo',
      type: 'image', // משתנה מסוג קובץ תמונה
      options: { hotspot: true },
    },
    {
      name: 'embarrassingImage2',
      title: 'Second Throwback Photo',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}

export const schemaTypes = [prankTarget]

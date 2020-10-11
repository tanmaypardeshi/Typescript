enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON};

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType : ResourceType.BOOK,       // this gets logged as 1
    data : {title: 'a clash of kings'}
}

const doctwo: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.DIRECTOR,    // this gets logged as 2
    data : { title: 'a game of thrones'}
}



export class FlashCard {
    front: FlashCardFrontSide;
    back: FlashCardBackSide;
}

export class FlashCardFrontSide {
    term: string;
    transcription: string;
}

export class FlashCardBackSide {
    definition: string;
    translation: string;
    example: string;
}
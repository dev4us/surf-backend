import { commonResponseDto } from 'src/common/common.dto';
import { User } from 'src/user/user.entity';

export class registerRequestDto {
  url: string;
  //loggedUserId: number;
  loggedUser: User;
}

export class getRssAddressResponseDto extends commonResponseDto {
  feedUrl: string;
}

export class parsingRSSResponseDto extends commonResponseDto {
  data?: {
    title: string;
    siteUrl: string;
    serviceOn?: string;
    feedUrl: string;
  };
}
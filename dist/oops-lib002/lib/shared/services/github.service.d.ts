import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GitHubRepo, GitHubUser } from '../models/shared.model';
import * as i0 from "@angular/core";
export declare class GithubService {
    private httpClient;
    errorMessage?: string;
    constructor(httpClient: HttpClient);
    searchUsers(term: string): Observable<GitHubUser[]>;
    searchRepos(term: string): Observable<GitHubRepo[]>;
    static ɵfac: i0.ɵɵFactoryDef<GithubService, never>;
    static ɵprov: i0.ɵɵInjectableDef<GithubService>;
}
//# sourceMappingURL=github.service.d.ts.map
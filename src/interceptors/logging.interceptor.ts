/* eslint-disable prettier/prettier */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("Before reaching the request handler");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const startTime = Date.now();

    // const methodName = context.getHandler().name;
    // const className = context.getClass().name;

    // console.log(context.getArgs()[0].body);
    context.getArgs()[0].body["new_key"] = "value";
    // console.log(next);

    return next.handle().pipe(
      tap(() =>
        console
          .log
          // `Response Lag for ${methodName} in class ${className}: ${
          //   Date.now() - startTime
          // }ms`
          ()
      )
    );
  }
}

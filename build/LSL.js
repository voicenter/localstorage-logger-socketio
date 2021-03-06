"use strict";
var LimitedSizeQueue_1 = require('./queue/LimitedSizeQueue');
exports.LimitedSizeQueue = LimitedSizeQueue_1.LimitedSizeQueue;
var LocalStorageLogger_1 = require('./loggers/LocalStorageLogger');
exports.LocalStorageLogger = LocalStorageLogger_1.LocalStorageLogger;
var ConsoleLogger_1 = require('./loggers/ConsoleLogger');
exports.ConsoleLogger = ConsoleLogger_1.ConsoleLogger;
var NullLogger_1 = require('./loggers/NullLogger');
exports.NullLogger = NullLogger_1.NullLogger;
var DefaultFormatter_1 = require('./formatters/DefaultFormatter');
exports.DefaultFormatter = DefaultFormatter_1.DefaultFormatter;
var LogBootstrapper_1 = require('./LogBootstrapper');
exports.LogBootstrapper = LogBootstrapper_1.LogBootstrapper;
var LogBootstrapper_2 = require('./LogBootstrapper');
var defaultBootstrapper = new LogBootstrapper_2.LogBootstrapper();
function default_1(config) {
    return defaultBootstrapper.bootstrap(config);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxTTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsaUNBQStCLDBCQUEwQixDQUFDO0FBQWxELCtEQUFrRDtBQUcxRCxtQ0FBaUMsOEJBQThCLENBQUM7QUFBeEQscUVBQXdEO0FBQ2hFLDhCQUE0Qix5QkFBeUIsQ0FBQztBQUE5QyxzREFBOEM7QUFDdEQsMkJBQXlCLHNCQUFzQixDQUFDO0FBQXhDLDZDQUF3QztBQUVoRCxpQ0FBK0IsK0JBQStCLENBQUM7QUFBdkQsK0RBQXVEO0FBRS9ELGdDQUE4QixtQkFBbUIsQ0FBQztBQUExQyw0REFBMEM7QUFHbEQsZ0NBQThCLG1CQUFtQixDQUFDLENBQUE7QUFFbEQsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNsRCxtQkFBeUIsTUFBdUM7SUFDOUQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRkQ7MkJBRUMsQ0FBQSIsImZpbGUiOiJMU0wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge0lRdWV1ZUNvbmZpZ3VyYXRpb259IGZyb20gJy4vcXVldWUvSVF1ZXVlQ29uZmlndXJhdGlvbic7XHJcbmV4cG9ydCB7TGltaXRlZFNpemVRdWV1ZX0gZnJvbSAnLi9xdWV1ZS9MaW1pdGVkU2l6ZVF1ZXVlJztcclxuXHJcbmV4cG9ydCB7SUxvY2FsU3RvcmFnZUxvZ2dlckNvbmZpZ3VyYXRpb259IGZyb20gJy4vbG9nZ2Vycy9JTG9jYWxTdG9yYWdlTG9nZ2VyQ29uZmlndXJhdGlvbic7XHJcbmV4cG9ydCB7TG9jYWxTdG9yYWdlTG9nZ2VyfSBmcm9tICcuL2xvZ2dlcnMvTG9jYWxTdG9yYWdlTG9nZ2VyJztcclxuZXhwb3J0IHtDb25zb2xlTG9nZ2VyfSBmcm9tICcuL2xvZ2dlcnMvQ29uc29sZUxvZ2dlcic7XHJcbmV4cG9ydCB7TnVsbExvZ2dlcn0gZnJvbSAnLi9sb2dnZXJzL051bGxMb2dnZXInO1xyXG5cclxuZXhwb3J0IHtEZWZhdWx0Rm9ybWF0dGVyfSBmcm9tICcuL2Zvcm1hdHRlcnMvRGVmYXVsdEZvcm1hdHRlcic7XHJcblxyXG5leHBvcnQge0xvZ0Jvb3RzdHJhcHBlcn0gZnJvbSAnLi9Mb2dCb290c3RyYXBwZXInO1xyXG5cclxuaW1wb3J0IHtJTG9jYWxTdG9yYWdlTG9nZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi9sb2dnZXJzL0lMb2NhbFN0b3JhZ2VMb2dnZXJDb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHtMb2dCb290c3RyYXBwZXJ9IGZyb20gJy4vTG9nQm9vdHN0cmFwcGVyJztcclxuaW1wb3J0IHtJTG9nfSBmcm9tICcuL0lMb2cnO1xyXG5jb25zdCBkZWZhdWx0Qm9vdHN0cmFwcGVyID0gbmV3IExvZ0Jvb3RzdHJhcHBlcigpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29uZmlnOklMb2NhbFN0b3JhZ2VMb2dnZXJDb25maWd1cmF0aW9uKSA6IElMb2cge1xyXG4gIHJldHVybiBkZWZhdWx0Qm9vdHN0cmFwcGVyLmJvb3RzdHJhcChjb25maWcpO1xyXG59XHJcbiJdfQ==

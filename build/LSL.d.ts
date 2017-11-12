// Generated by dts-bundle v0.3.0

declare module 'LSL' {
    export { IQueueConfiguration } from '__LSL/queue/IQueueConfiguration';
    export { LimitedSizeQueue } from '__LSL/queue/LimitedSizeQueue';
    export { ILocalStorageLoggerConfiguration } from '__LSL/loggers/ILocalStorageLoggerConfiguration';
    export { LocalStorageLogger } from '__LSL/loggers/LocalStorageLogger';
    export { ConsoleLogger } from '__LSL/loggers/ConsoleLogger';
    export { NullLogger } from '__LSL/loggers/NullLogger';
    export { DefaultFormatter } from '__LSL/formatters/DefaultFormatter';
    export { LogBootstrapper } from '__LSL/LogBootstrapper';
    import { ILocalStorageLoggerConfiguration } from '__LSL/loggers/ILocalStorageLoggerConfiguration';
    import { ILog } from '__LSL/ILog';
    export default function (config: ILocalStorageLoggerConfiguration): ILog;
}

declare module '__LSL/queue/IQueueConfiguration' {
    /**
        * This describes the settings for the limited size queue.
        */
    export interface IQueueConfiguration {
            /**
                * This defines the prefix the queue should use for all local storage entries.
                * There should be a unique prefix for each queue.
                */
            keyPrefix: string;
            /**
                * This defines a (rough) limit for the size of the queue in local storage.
                * Once this size is met, the oldest elements in the queue will be removed
                * to make space for newer elements.
                */
            maxSizeInBytes: number;
    }
}

declare module '__LSL/queue/LimitedSizeQueue' {
    import { IQueueConfiguration } from '__LSL/queue/IQueueConfiguration';
    /**
        * A limited-size queue that is persisted to local storage. Enqueuing
        * elements can remove the oldest elements in order to free up space.
        */
    export class LimitedSizeQueue<T> {
            /**
                * Creates/restores a queue based on the configuration provided.
                * @param _config The settings for the queue
                */
            constructor(_config: IQueueConfiguration);
            /**
                * Enqueues an item in the queue. Throws if the value is too big to fit in local storage
                * based on the maximum sized defined in the queue configuration. May also throw
                * if local storage is out of space or corrupted.
                */
            enqueue(value: T): void;
            /**
                * If the queue has at least 1 item, it removes and returns the oldest item from the queue.
                * Otherwise, it will return nothing.
                */
            dequeue(): T | void;
            /**
                * Returns true if the queue is empty.
                */
            isEmpty(): boolean;
            /**
                * Iterates (without removal) through all items stored in the queue.
                */
            iterate(callback: (item: T) => void): void;
            /**
                * Iterates (without removal) through all items stored in the queue.
                */
            iterateForServer(callback: (item: T) => void): void;
            /**
                * cleanAll  items stored in LocalStorage.
                */
            cleanAll(): void;
    }
}

declare module '__LSL/loggers/ILocalStorageLoggerConfiguration' {
    /**
        * Defines settings for a local storage logger instance.
        */
    export interface ILocalStorageLoggerConfiguration {
            /**
                * The name of the log. Must be unique for each instance.
                */
            logName: string;
            /**
                * The approximate maximum size of the log in bytes.
                */
            maxLogSizeInBytes: number;
            /**
                * Do i want to log  To console ?
                */
            logToConsole: boolean;
            /**
                *  SocketIO-Client Object to senfd the log to the server
                */
            SocketIOLogger: any;
    }
}

declare module '__LSL/loggers/LocalStorageLogger' {
    import { ILogger } from '__LSL/loggers/ILogger';
    import { ILogEntry } from '__LSL/core/ILogEntry';
    import { ILocalStorageLoggerConfiguration } from '__LSL/loggers/ILocalStorageLoggerConfiguration';
    /**
        * Logger that logs to a queue in local storage. Will overwrite oldest entries
        * when desired size is exceeded.
        */
    export class LocalStorageLogger implements ILogger {
            /**
                * Constructs a new local storage logger.
                * @param config The configuration defining the unique queue name, desired size etc.
                * @param _nextLogger The next logger in the "log chain"
                */
            constructor(config: ILocalStorageLoggerConfiguration, _nextLogger: ILogger);
            /**
                * Logs an entry to local storage.
                */
            log(entry: ILogEntry): void;
            /**
                * Returns all log entries that are still held in local storage.
                */
            allEntries(): Array<ILogEntry>;
            /**
                * Returns all log entries that are still held in local storage.
                */
            cleanAllEntries(): void;
            /**
                * Returns all log entries that are still held in local storage.
                */
            allEntriesToServer(): Array<ILogEntry>;
    }
}

declare module '__LSL/loggers/ConsoleLogger' {
    import { ILogger } from '__LSL/loggers/ILogger';
    import { ILogEntry } from '__LSL/core/ILogEntry';
    import { ILogEntryFormatter } from '__LSL/formatters/ILogEntryFormatter';
    import { ILocalStorageLoggerConfiguration } from '__LSL/loggers/ILocalStorageLoggerConfiguration';
    /**
     * Logger that logs to the console.
     */
    export class ConsoleLogger implements ILogger {
            /**
                * Constructs a console logger.
                * @param _formatter The formatter used to format the entry for the console
                * @param _nextLogger The next logger in the "log chain"
                * @param _config Config struct of the LocalStorageLoggerConfiguration
                */
            constructor(_formatter: ILogEntryFormatter, _nextLogger: ILogger, _config: ILocalStorageLoggerConfiguration);
            /**
                * Logs an entry to the console.
                * @param entry The entry to log
                */
            log(entry: ILogEntry): void;
    }
}

declare module '__LSL/loggers/NullLogger' {
    import { ILogger } from '__LSL/loggers/ILogger';
    /**
        * A logger that doesn't actually do anything. Used for terminating a chain of loggers.
        */
    export class NullLogger implements ILogger {
            /**
                * No-op
                */
            log(entry: any): void;
    }
}

declare module '__LSL/formatters/DefaultFormatter' {
    import { ILogEntry } from '__LSL/core/ILogEntry';
    import { ILogEntryFormatter } from '__LSL/formatters/ILogEntryFormatter';
    /**
        * Provides the default formatting for a log entry. E.g., "[2015-01-12 00:01:08] [INFO] Message blah blah..."
        */
    export class DefaultFormatter implements ILogEntryFormatter {
            /**
                * Formats a log entry as [TIME] [LEVEL] MESSAGE
                * @param entry The log entry
                */
            format(entry: ILogEntry): string;
    }
    export class JSONFormatter implements ILogEntryFormatter {
            /**
                * Formats a log entry as [TIME] [LEVEL] MESSAGE
                * @param entry The log entry
                */
            format(entry: ILogEntry): string;
    }
}

declare module '__LSL/LogBootstrapper' {
    import { ILocalStorageLoggerConfiguration } from '__LSL/loggers/ILocalStorageLoggerConfiguration';
    import { ILog } from '__LSL/ILog';
    /**
        * Bootstraps the log chain setup.
        */
    export class LogBootstrapper {
            constructor(_timestampProvider?: () => Date);
            /**
                * Returns a logging interface that has been set up with default loggers and formatters.
                */
            bootstrap(config: ILocalStorageLoggerConfiguration): ILog;
    }
}

declare module '__LSL/ILog' {
    /**
      * Allows logging and exporting of the log.
      */
    export interface ILog {
        debug(...args: any[]): any;
        info(...args: any[]): any;
        warn(...args: any[]): any;
        error(...args: any[]): any;
        clean(): void;
        exportToArray(): string[];
        exportToServer(): void;
    }
}

declare module '__LSL/loggers/ILogger' {
    import { ILogEntry } from '__LSL/core/ILogEntry';
    /**
        * Interface for logging individual log entries.
        */
    export interface ILogger {
            /**
                * Logs a log entry.
                * @param entry The log entry
                */
            log(entry: ILogEntry): any;
    }
}

declare module '__LSL/core/ILogEntry' {
    import { LogLevel } from '__LSL/core/LogLevel';
    /**
        * Represents an entry in an application log.
        */
    export interface ILogEntry {
            /**
                * The time the log entry was created.
                */
            time: string;
            /**
                * The log message.
                */
            message: string;
            /**
                * The log level
                */
            level: LogLevel;
    }
}

declare module '__LSL/formatters/ILogEntryFormatter' {
    import { ILogEntry } from '__LSL/core/ILogEntry';
    /**
        * Interface for formatting log entries for presentation.
        */
    export interface ILogEntryFormatter {
            /**
                * Takes a log entry and returns a formatted string.
                * @param entry The log entry
                */
            format(entry: ILogEntry): string;
    }
}

declare module '__LSL/core/LogLevel' {
    /**
      * Represents various levels of logging.
      */
    export enum LogLevel {
        TRACE = 0,
        DEBUG = 1,
        INFO = 2,
        WARN = 3,
        ERROR = 4,
        FATAL = 5,
    }
}


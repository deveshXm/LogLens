import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import { LogsTable } from "./components/LogsTable";


const schema = [
  { key: "timestamp", label: "Timestamp" },
  { key: "level", label: "Level" },
  { key: "message", label: "Message" },
  { key: "traceId", label: "Trace Id" },
  { key: "spanId", label: "Span ID" },
  { key: "commit", label: "Commit" },
  { key: "metadata.parentResourceId", label: "Parent Resource ID" },
];

const data = [
  {
    level: "warning",
    message: "Unused libraries in DB",
    resourceId: "server-1235",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
];

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleQueryChange = (value: string) => {
    setQuery(value);
  };

  const handleSearch = () => {
    console.log("Real-Time button clicked with query:", query);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 w-[100vw] h-[100vh] p-10">
      <div className="flex w-full justify-around items-center">
        <h1 className="font-extrabold text-7xl p-5 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black">
          LogLens
        </h1>
        <Input
          label="Query here..."
          value={query}
          onChange={handleQueryChange}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <LogsTable schema={schema} data={data} />
    </div>
  );
};

export default App;

-- CreateTable
CREATE TABLE "Blink" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "Blink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Blink_key_key" ON "Blink"("key");

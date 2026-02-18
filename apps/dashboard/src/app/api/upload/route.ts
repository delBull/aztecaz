import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename') || 'file';

    if (!request.body) {
        return NextResponse.json({ error: 'No body' }, { status: 400 });
    }

    try {
        const blob = await put(filename, request.body, {
            access: 'public',
            token: process.env.BLOB_READ_WRITE_TOKEN, // Uses env var or defaults if configured globally
        });

        return NextResponse.json(blob);
    } catch (error) {
        console.error("Blob upload error:", error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
